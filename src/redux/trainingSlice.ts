import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from '../api/api';
import { setLoading } from './LoaderSlice';
import { push } from "redux-first-history";


export type Exercise = {
    _id?: string;
    name: string;
    replays: number;
    weight: number;
    approaches: number;
    isImplementation: boolean;
}

export type Parameters = {
    repeat: boolean;
    period: any; 
    jointTraining: boolean;
    participants: any[]; 
}

export type TrainingsType = {
    _id: string;
    name: string;
    date: string;
    isImplementation: boolean | null;
    userId: string;
    parameters?: Parameters;
    exercises: Exercise[] | [];
  }

export type TrainingType = {
   label: string,
   value: string
}

export type TrainingListType = {
    label: string,
    value: string
 }

type initialStateType ={
    trainings: TrainingsType[],
    trainingsList: TrainingListType[]
    errorAllTrainings: boolean
    errorTrainingsList: boolean
    errorTrainingsSave: boolean
    successAddtraining: boolean
}

const initialState: initialStateType ={
    trainings: [],
    trainingsList: [],
    errorAllTrainings: false,
    errorTrainingsList: false,
    errorTrainingsSave: false,
    successAddtraining: false,
}

const training = createSlice({
    name: 'training',
    initialState,
    reducers: {
        
        setTrainings(state, action:PayloadAction<TrainingsType[]>) {
            state.trainings = action.payload;
        },
        setTrainingList(state, action:PayloadAction<TrainingListType[]>) {
            state.trainingsList = action.payload;
        },
        setErrorAllTrainings(state, action:PayloadAction<boolean>) {
            state.errorAllTrainings = action.payload;
        },
        setErrorATrainingsList(state, action:PayloadAction<boolean>) {
            state.errorTrainingsList = action.payload;
        },
        setErrorTrainingsSave(state, action:PayloadAction<boolean>) {
            state.errorTrainingsSave = action.payload;
        },
        setSuccessTrainingAdd(state, action:PayloadAction<boolean>) {
            state.successAddtraining = action.payload;
        },
    },
});

export const {setTrainings, setTrainingList, 
    setErrorAllTrainings, setErrorATrainingsList, 
    setErrorTrainingsSave, setSuccessTrainingAdd} = training.actions;


export const getTrainingThunk = (accessToken: string | null) => {
    return (dispatch: any) => {
        dispatch(setLoading(true));

        userApi.getTrainings(accessToken).then((response: any) => {
            dispatch(setLoading(false));
            dispatch(setTrainings(response));
            dispatch(push('/calendar'));
        })
        .catch(error => {
            dispatch(setErrorAllTrainings(true))
            dispatch(setLoading(false));
            
        });
    };
};

export const createTrainingThunk = (accessToken: string | null, training: any) => {
    return (dispatch: any) => {
        const token = accessToken
        userApi.createTrainings(accessToken, training).then((response: any) => {
           dispatch(getTrainingThunk(token))
          dispatch(setSuccessTrainingAdd(true))
        })
        .catch(error => {
            dispatch(setErrorTrainingsSave(true))
        });
    };
};

export const changeTrainingThunk = (accessToken: string | null, trainingId: string, training: any) => {
    return (dispatch: any) => {
const token = accessToken
        userApi.changeTrainings(accessToken, trainingId, training).then((response: any) => {
           dispatch(getTrainingThunk(token))
          dispatch(setSuccessTrainingAdd(true))
        })
        .catch(error => {
            dispatch(setErrorTrainingsSave(true))
        });
    };
};

export const getTrainingListThunk = (accessToken: string | null) => {
    return (dispatch: any) => {

        userApi.trainingList(accessToken).then((response: any) => {
            const formattedResponse = response.map((item: any) => ({
                label: item.name,
                value: item.name
            }));

            dispatch(setTrainingList(formattedResponse));
            
        })
        .catch(error => {
            dispatch(setErrorATrainingsList(true))
        });
    };
};


export default training.reducer;


