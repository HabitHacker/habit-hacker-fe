export type ChallengeType = {
  id: string;
  deposit: number;
  title: string;
  image: string;
  startDate: Date;
  endDate: Date;
  participants: number;
  limit: number;
  minDeposits: number;
  maxDeposits: number;
  hashtags: Array<string>;
  timeLeft: number;
  organizer: {
    name: string;
    image: string;
  };
  description: string;
  nfts: Array<{
    title: string;
    image: string;
    description: string;
  }>;
  background: string;
  fontColor: string;
  average: number;
};

export type ExecutionType = {
  id: string;
  account: string;
  challengeId: string;
  count: number;
  imagePath: string;
  imageName: string;
  status: ImageUploadStatus;
};

export type ImageUploadStatus = 'none'|'uploading'|'success'|'pending'|'rejected';
