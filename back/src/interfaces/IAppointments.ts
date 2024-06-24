interface IAppointment {
    id: number;
    date: string;
    time: string;
    status: "active" | "canceled";

}
export default IAppointment;