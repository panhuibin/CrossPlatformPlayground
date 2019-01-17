import {Dispatch} from "redux";
import {NavigationScreenProp} from "react-navigation";

export interface DispatchProps {
  dispatch: Dispatch
}

export interface NavigationProps {
  navigation: NavigationScreenProp<any, any>
}

export interface RouterReduxProps extends DispatchProps, NavigationProps{}

// = = = = = = = = = = = = = =

export interface ViewProps{
  style?: any;
}

// = = = = = = = = = = = = = =

export interface SectionListData {
  key: string;
  data: any;
}