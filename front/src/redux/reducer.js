import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    userAppointments: []
}

export const userSlice = createSlice({

    name: "userSlice",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload
        }, 
        deleteUser: (state, action) => {
            state.user = []
        },
        cancelAppointment: (state, action) => {
            state.userAppointments = state.userAppointments.map((appointment) => {
              if (appointment.id === action.payload) {
                return { ...appointment, status: 'canceled' };
              }
              return appointment;
            });
          },
        },
      });

export const { setUser, setUserAppointments, deleteUser, cancelAppointment } = userSlice.actions;



