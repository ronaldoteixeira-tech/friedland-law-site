export interface Location {
  city: string;
  state: string;
  slug: string;
  address: string;
  zip: string;
  phone: string;
  mapUrl?: string;
  iframeSrc?: string;
}

export const locations: Location[] = [
  { 
    city: "New York", 
    state: "NY", 
    slug: "new-york", 
    address: "50 Broad Street #1502", 
    zip: "10004", 
    phone: "800-210-HURT",
    mapUrl: "https://maps.app.goo.gl/rNbu1kpihAt2csAQ8",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3024.562809024467!2d-74.0116234!3d40.7056253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bccb415a81b%3A0x28de6cdaeb1bfbb9!2sFriedland%20Law%20-%20Car%20Accident%20and%20Personal%20Injury%20Attorneys%20-%20New%20York%20City!5e0!3m2!1sen!2sbr!4v1773407139684!5m2!1sen!2sbr"
  },
  { 
    city: "Jacksonville", 
    state: "FL", 
    slug: "jacksonville", 
    address: "6620 Southpoint Dr S Suite 115-E", 
    zip: "32216", 
    phone: "800-210-HURT",
    mapUrl: "https://maps.app.goo.gl/KSHX3WwmodLTA4E76",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3446.481086907332!2d-81.5916005!3d30.251871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5cbc7298cd4d1%3A0xc93944ac788a0936!2sFriedland%20Law%2C%20Car%20Accident%20and%20Personal%20Injury%20Attorneys%20-%20Jacksonville!5e0!3m2!1sen!2sbr!4v1773407153443!5m2!1sen!2sbr"
  },
  { 
    city: "New Jersey", 
    state: "NJ", 
    slug: "river-edge", 
    address: "70 Grand Ave #107, River Edge", 
    zip: "07661", 
    phone: "800-210-HURT",
    mapUrl: "https://maps.app.goo.gl/jwzEEXDehszL3n5s5",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3015.2422403973706!2d-74.0369412!3d40.9104342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fb20e4262f13%3A0xb16a701f7e6e5dfc!2sFriedland%20Law%20-%20Car%20Accident%20and%20Personal%20Injury%20Attorneys%20-%20New%20Jersey!5e0!3m2!1sen!2sbr!4v1773407165462!5m2!1sen!2sbr"
  },
  { 
    city: "Ft. Lauderdale", 
    state: "FL", 
    slug: "ft-lauderdale", 
    address: "101 NE 3rd Ave Suite 1600", 
    zip: "33301", 
    phone: "800-210-HURT",
    mapUrl: "https://maps.app.goo.gl/zJLQ94poSedG4r429",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.244651512293!2d-80.1410971!3d26.1235649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d901aa437104b5%3A0x9a459a2f11460630!2sFriedland%20Law%20-%20Car%20Accident%20and%20Personal%20Injury%20Attorneys%20-%20Fort%20Lauderdale!5e0!3m2!1sen!2sbr!4v1773407126221!5m2!1sen!2sbr"
  }
];
