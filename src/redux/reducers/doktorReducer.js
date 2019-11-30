import { constants as CONSTS } from "../../constants/constants";

const initialState = {
    doktorAd: '',
    doktorSoyad: '',
    doktorlar: []
  };
  
  export const doktorReducer = function(state = initialState, action) {
    switch (action.type) {
      case CONSTS.DOKTOR_DEGISTIR_AD:
        const ad = Object.assign({}, state, { doktorAd: action.payload.doktorAd });
        return ad;
      case CONSTS.DOKTOR_DEGISTIR_SOYAD:
        const soyad = Object.assign({}, state, { doktorSoyad: action.payload.doktorSoyad });
        return soyad;
      case CONSTS.DOKTOR_EKLE:
        const yeniDoktor = { doktorAd: state.doktorAd, doktorSoyad: state.doktorSoyad};
        const yeniListe = [...state.doktorlar, yeniDoktor];
        const liste = Object.assign({}, state, { doktorlar: yeniListe });
        return liste;
  
      default:
        return state;
    }
  };