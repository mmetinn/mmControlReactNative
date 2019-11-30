import { constants as CONSTS} from "../../constants/constants";

const initialState = {
    hastaAd: '',
    hastaSoyad: '',
    token:'',
    loginStatus:'',
    hastalar: []
  };

  
  
  export const hastaReducer = function(state = initialState, action) {
    switch (action.type) {
      case CONSTS.HASTA_DEGISTIR_AD:
        const ad = Object.assign({}, state, { hastaAd: action.payload.hastaAd });
        console.log(action.payload.hastaAd+"------------");
        
        return ad;
      case CONSTS.HASTA_DEGISTIR_SOYAD:
        const soyad = Object.assign({}, state, { hastaSoyad: action.payload.hastaSoyad });
        return soyad;
      case CONSTS.HASTA_EKLE:
        const yenihasta = { hastaAd: state.hastaAd, hastaSoyad: state.hastaSoyad};
        const yeniListe = [...state.hastalar, yenihasta];
        const liste = Object.assign({}, state, { hastalar: yeniListe });
        return liste;
  
      default:
        return state;
    }
  };