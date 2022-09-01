import {
  ADD_ITEM,
  EMPTY_CART,
  REMOVE_ITEM,
  UPDATE_QTY,
  INCREASE_1,
  INCREASE_2,
  INCREASE_5,
  handleSearch,
  FILTER_CATEGORY,
  ORDER_LIST
} from "./cart-constant";

const initialState = {
  cartItems: [],
  orderItem: [],
  count: 0,
  searchItem: [],
  filterCategoryItem:[]
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // console.log("ye action.payload ==>",action.payload)
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case UPDATE_QTY:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
      case EMPTY_CART:
        return {
          ...state,
          cartItems: [],
        };
        case INCREASE_1:
          return {
            count: state.count + 1
          }
      case INCREASE_2:
        return {
          count: state.count + 2
        }
        case INCREASE_5:
          return {
            count: state.count + 5
          }
          case handleSearch:
            return {
              ...state,
              searchItem: action.payload
            }
            case FILTER_CATEGORY:
              return{
                ...state,
                // filterCategoryItem:[state.filterCategoryItem.filter((item)=> item.category===action.payload)]
                filterCategoryItem: action.payload
              }
              case ORDER_LIST:
                return {
                  ...state,
                  orderItem : [...state.orderItem , ...action.payload]
                }
            default:
              return state;
            }
          };
          
          export default reducer;