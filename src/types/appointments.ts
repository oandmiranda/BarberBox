export type Appointment = {
  id: string;
  client_id: string;
  start_time: Date;
  end_time: Date;
  status: "SCHEDULED" | "CANCELED";
  barber_image_url: string;
  barber_name: string;
  service_name: string;
  service_image_url: string;
};

export type AppointmentView = {
  id: string;
  client_id: string;
  start_time: Date;
  end_time: Date;
  status: "SCHEDULED" | "CANCELED" | "COMPLETED";
  barber_image_url: string;
  barber_name: string;
  service_name: string;
  service_image_url: string;
};

// this type is used to represent the raw data returned from the database before converting the date strings to Date objects
export type RawAppointmentRow = {
  id: string;
  client_id: string;
  start_time: string;
  end_time: string;
  status: "SCHEDULED" | "CANCELED";
  barber_image_url: string;
  barber_name: string;
  service_name: string;
  service_image_url: string;
};
