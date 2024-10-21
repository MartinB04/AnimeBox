import { DOMAIN_URL } from '@env';

export const domain = `${DOMAIN_URL}/src`;
export const user_profile_images_path = `${DOMAIN_URL}/uploads/user_profile_images`;

export const php_path = `${domain}/Php`;
export const images_path = `${domain}/Images`;

export const login_script = `${php_path}/IniciarSesion.php`
export const register_user_script = `${php_path}/Registro.php`
export const delete_user_script = `${php_path}/EliminarUsuario.php`
export const update_visualization_anime_script = `${php_path}/ActualizarVisualizacion.php`
export const visualization_anime_script = `${php_path}/Visualizacion.php`
export const show_animes_script = `${php_path}/MostrarAnimes.php`
export const update_user_profile_script = `${php_path}/ActualizarPerfil.php`
export const show_user_anime_list_script = `${php_path}/MostrarAnimesUsuario.php`
export const show_info_anime_script = `${php_path}/MostrarInfoAnime.php`
