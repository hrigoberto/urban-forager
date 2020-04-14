import {useState, useEffect} from 'react';


const useLocation = () => {
  const [coords, setLatLng] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLatLng(position.coords),
      err => setErrorMessage(err.message)
    );


  }, [])

  return [coords, errorMessage];
}

export default useLocation;
