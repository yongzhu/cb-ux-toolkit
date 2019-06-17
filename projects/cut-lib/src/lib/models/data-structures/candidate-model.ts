export interface CutCandidateModel {
  id: string;
  name: string;
  designation: string;
  orgnaisation: string;
  experience: {
    year: number;
    month: number;
  };
  location: string;
  stateCode: string;
  phone: string;
  email: string;
  matchtype: string;
  skills: string[];
  verticalOptions: VerticalOptions[];
}
export interface VerticalOptions {
  name: string;
  icon: string;
}
