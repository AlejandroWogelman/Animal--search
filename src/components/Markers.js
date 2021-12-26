import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import realTimeDB from "../firebase/firebaseConfig";
import { iconFirebase } from "../helpers/iconFirebase";
import { onValue, ref } from "firebase/database";
import { formatDistanceToNowStrict } from "date-fns";

export const Markers = () => {
  const [realState, setRealState] = useState([]);

  useEffect(() => {
    const getRealMarkers = async () => {
      const markers = ref(realTimeDB, "markers");
      onValue(markers, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        setRealState(data);
      });
    };
    getRealMarkers();
  }, []);

  return (
    Object.entries(realState).length > 0 &&
    Object.values(realState).map(({ description, coords, type, time }, i) => {
      const timeView = formatDistanceToNowStrict(new Date(time)).toString();
      return (
        <Marker position={coords} icon={iconFirebase(type)} key={i}>
          <Popup position={coords} offset={[0, 50]}>
            <div style={{ textAlign: "center" }}>
              <h2>Information</h2>
              <p>{description}</p>
              <p>
                Publicado hace{" "}
                <span style={{ textDecoration: "underline red" }}>
                  {timeView}
                </span>
              </p>
            </div>
          </Popup>
        </Marker>
      );
    })
  );
};

/* return state?.map(({ description, coords, time, type }, i) => {
    const timeView = formatDistanceToNowStrict(new Date(time)).toString();

    return (
      <Marker position={coords} icon={iconFirebase(type)} key={i}>
        <Popup position={coords} offset={[0, 50]}>
          <div style={{ textAlign: "center" }}>
            <h2>Information</h2>
            <p>{description}</p>
            <p>
              Publicado hace{" "}
              <span style={{ textDecoration: "underline red" }}>
                {timeView}
              </span>
            </p>
          </div>
        </Popup>
      </Marker>
    );
  } )*/
