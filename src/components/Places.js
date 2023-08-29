import React, { useState, useMemo, useEffect } from "react";
import Script from "next/script";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  GoogleApiWrapper,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import Loader from "./Loader";
import "@reach/combobox/styles.css";

const libraries = ["places"];

const PlacesAutocomplete = ({ onSelect, id, placeholder }) => {
  // useGoogleMapsScript();
  const center = useMemo(() => ({ lat: 37.0902, lng: -95.7129 }), []);
  const [selected, setSelected] = useState(null);
  usePlacesAutocomplete({
    initOnMount: true,
  });
  const {
    value,
    ready,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInternalChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });

    if (onSelect) onSelect({ lat, lng, value: results[0].formatted_address });
  };
  if (!ready) return <Loader />;

  return (
    <>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          id={id}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleInternalChange}
          disabled={!ready}
          required
          className="w-full rounded-lg text-gray-700  border-2 border-gray-400 p-[9.8px] text-sm"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      {/* <GoogleMap zoom={3} center={center} mapContainerClassName="map-container">
        {selected && <Marker position={selected} />}
      </GoogleMap> */}
    </>
  );
};

export default PlacesAutocomplete;
