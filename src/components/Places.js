import React, { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
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

const PlacesAutocomplete = ({ onSelect, id, placeholder }) => {
  const center = useMemo(() => ({ lat: 37.0902, lng: -95.7129 }), []);
  const [selected, setSelected] = useState(null);
  const {
    ready,
    value,
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
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBNED5xlWHoI5p49hvCUZseMeIEvfpO-t0",
    libraries: ["places"],
  });

  if (!isLoaded) return <Loader />;

  return (
    <>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          id={id}
          placeholder={placeholder}
          onChange={handleInternalChange}
          disabled={!ready}
          className="w-full rounded-lg  border-2 border-gray-400 p-3 text-sm"
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
