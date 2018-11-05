import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies'

const initialState = {
  baseCurrency: 'CAD',
  quoteCurrency: 'RMB',
  amount: 100,
  conversions: {},
  error: null,
}

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  }
  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency]
  }
  return {
    ...state.conversions,
    [action.currency]: conversion,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      // action带上了type与amount
      return { ...state, amount: action.amount || 0 }
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      }
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action),
      }
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversions(state, action),
      }
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversions(state, { currency: state.baseCurrency }),
      }
    case CONVERSION_ERROR:
      return { ...state, error: action.error }
    case CONVERSION_RESULT:
      // resp = {"base":"CAD","date":"2018-09-06","rates":{"AUD":1.0539, ...} }
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: true,
            ...action.result,
          },
        },
      }
    default:
      return state
  }
}

