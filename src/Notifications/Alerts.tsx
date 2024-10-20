import { Alert } from "react-native";

export const AlertDeleteUserProfile = (EliminarPerfil: () => void) => {
    Alert.alert('Eliminación de Perfil', '¿Estás seguro de que deseas eliminar tu cuenta? Esta acción es irreversible.', [

        { text: 'Eliminar', onPress: () => EliminarPerfil },
        {
            text: 'Cancel',
            style: 'cancel',
        },
    ])
};


export const AlertUpdateProfile = (UpdateProfile: () => void, ReiniciarDatos: () => void) => {
    Alert.alert("Actualiza perfil", "Seguro que quieres actulizar el perfil?", [
      { text: "Actualizar", onPress: () => UpdateProfile() },
      { text: "Cancelar", style: 'cancel', onPress: ReiniciarDatos }
    ])
  }