import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getDatabase, ref, set } from "firebase/database";
import { nanoid } from "nanoid";
const MySwal = withReactContent(Swal);

export const itsOK = () => {
  return MySwal.fire(
    "Presione en el mapa para agregar referencia, sea lo más preciso posible."
  );
};
export const welcome = () => {
  return MySwal.fire({
    title: "Información sobre la Página",
    text: "La idea es poder crear referencias de nuestas mascotas. Puede agregar mascotas EXTRAVIADAS (en el lugar del hecho) o VISTAS, aclararlo en los detalles al marcar. La mejor de las suertes y a no bajar los brazos! :)",
  });
};

const selectAlert = async () => {
  //Alerta de seleccion de mascotas
  const { value: option } = await MySwal.fire({
    title: "Seleccionar mascota",
    input: "select",
    inputOptions: {
      Mascotas: { dog: "Perro", cat: "Gato", other: "Otro" },
    },
    inputPlaceholder: "Tipo de mascota",
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        !value ? resolve("Debe elegir una opción") : resolve();
      });
    },
  });
  return option;
};

export const inputAlert = async (latlng) => {
  //Alerta con Textarea
  const { value: text } = await MySwal.fire({
    input: "textarea",

    inputLabel: "Agregar todos los detalles relevantes",
    inputPlaceholder: "Detalles de la mascota",
    inputAttributes: {
      maxLength: 140,
      minLength: 5,
    },
    showCancelButton: true,
    validationMessage: "Entre 5 y 140 caracteres",
    icon: "question",
  });

  if (text) {
    const selection = await selectAlert();
    await writeUserData(latlng, text, selection);

    /* await firebaseAddData(latlng, text, selection); */

    selection &&
      MySwal.fire({
        icon: "success",
        title: "Agregado!",
        showConfirmButton: false,
        timer: 2500,
      });
  }
};

function writeUserData(latlng, text, selection) {
  const time = new Date();
  const db = getDatabase();
  set(ref(db, "markers/" + nanoid(5)), {
    description: text,
    coords: latlng,
    type: selection,
    time: time.toString(),
  });
}
