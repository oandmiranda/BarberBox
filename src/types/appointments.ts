export type Appointment = {
  id: string;
  start_time: Date;
  end_time: Date;
  status: "SCHEDULE" | "CANCELED";
  barber_image_url: string;
  barber_name: string;
  service_name: string;
};

export type AppointmentView = {
  id: string;
  start_time: Date;
  end_time: Date;
  status: "SCHEDULE" | "CANCELED" | "COMPLETED";
  barber_image_url: string;
  barber_name: string;
  service_name: string;
};

// this type is used to represent the raw data returned from the database before converting the date strings to Date objects
export type RawAppointmentRow = {
  id: string;
  start_time: string;
  end_time: string;
  status: "SCHEDULE" | "CANCELED";
  barber_image_url: string;
  barber_name: string;
  service_name: string;
};
