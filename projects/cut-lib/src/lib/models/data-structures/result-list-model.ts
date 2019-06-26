export interface CutVerticalOptionModel {
  name: string,
  icon: string
}

export interface CutExperienceModel {
  year: number;
  month: number;
}

export interface CutResultListModel {
  name: string;
  designation: string;
  orgnaisation: string;
  experience: CutExperienceModel;
  location: string;
  stateCode: string;
  phone: string;
  email: string;
  matchtype: string;
  skills: string[];
  verticalOptions: CutVerticalOptionModel[];
}