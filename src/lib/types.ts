export type User = {
  id: number;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  dob: string | null;
  sex: string | null;
  latitude: number | null;
  longitude: number | null;
  hashKey: string;
  isDocumentsVerified: boolean;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
};

type Document = {
  id: number;
  userId: number;
  photosPathUrls: string[];
  createdAt: string;
  modifiedAt: string | null;
  deletedAt: string | null;
};

type Biometric = {
  id: number;
  userId: number;
  photosPathUrl: string;
  orientation: string;
  createdAt: string;
  modifiedAt: string | null;
  deletedAt: string | null;
};

type VoiceRecording = {
  id: number;
  userId: number;
  voicePathUrl: string;
  createdAt: string;
  modifiedAt: string | null;
  deletedAt: string | null;
};

export type UserPassport = User & {
  documents: Document[];
  biometrics: Biometric[];
  voice_recordings: VoiceRecording[];
};

export type VerifyComponentsProps = {
  children: React.ReactNode;
  className?: string;
};

export interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

export type SpeechRecognitionResultList = {
  [index: number]: SpeechRecognitionResult;
  length: number;
};

export type SpeechRecognitionResult = {
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
  length: number;
};

export type SpeechRecognitionAlternative = {
  transcript: string;
  confidence: number;
};

export type EventData = {
  id: number;
  image: string;
  category: string;
  price: number;
  status: string;
};

export type RecentBuyData = {
  id: number;
  name: string;
  share_type: string;
  share_amount: number;
  potential_win: number;
};

export type RecentLogins = {
  id: number;
  image: string;
  name: string;
  time: string;
};

export type FutrUsersType = {
  id: number;
  name: string;
  status: string;
  date: string;
};
