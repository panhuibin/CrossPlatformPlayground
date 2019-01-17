import {Action} from "redux";

export const TRY_SCHEDULE = 'TRY_SCHEDULE'
export const trySchedule = () => ({
  type: TRY_SCHEDULE,
})

export const GOT_SCHEDULE = 'GOT_SCHEDULE'
export const gotSchedule = (resp: ScheduleListResponse) => ({
  type: GOT_SCHEDULE,
  payload: resp
})

const initState = {
  day1: {},
  day2: {},
}

export default (state = initState, action: ScheduleAction) => {
  switch (action.type) {
    case GOT_SCHEDULE:
      let {payload} = action
      return payload
    default:
      return state
  }
}

interface ScheduleAction {
  type: string;
  payload: ScheduleListResponse;
}

export interface ScheduleListResponse {
  day1: ScheduleResponse;
  day2: ScheduleResponse;
}

export interface ScheduleResponse {
  day: number;
  schedules: Schedule[]
}

export interface Schedule {
  startTime: string;
  endTime: string;
  topic: Topic;
}

export interface Topic {
  title: string;
  desp: string;
}