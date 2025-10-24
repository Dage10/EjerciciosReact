function AgraimentUsuari({ estaLoguejat = false, usuari = "DavidGelma" }) {
  const missatgeBenvinguda = (
    <h2 className="missatge-benvinguda">Benvingut {usuari}</h2>
  );

  const missatgeLogin = (
    <h2 className="login-missatge">Siusplau loguejat</h2>
  );

  return estaLoguejat ? missatgeBenvinguda : missatgeLogin;
}

export default AgraimentUsuari;
