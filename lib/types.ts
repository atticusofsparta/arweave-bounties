import { ApiConfig } from "arweave/node/lib/api";

export interface BountyClient {
  gatewayConfig: ApiConfig;
  createBounty(): Promise<string>;
  requestApproval(): Promise<string>;
  approveHunter(): Promise<string>;
  submitWork(): Promise<string>;
  reviewBounty(): Promise<string>;
  renewBounty(): Promise<string>;
  closeBounty(): Promise<string>;
  getBounty(id: string): Promise<Bounty>;
  getBounties(filters: {
    currency?: string[];
    sponsors?: string[];
    requiresApproval?: boolean;
    state?: BountyState[];
    age?: number;
  }): Promise<Bounty[]>;
}
export type Sponsor = {
  name: string;
  contact: string;
  address: string; // Assuming address is a string, you might have a more specific type for blockchain addresses.
};

export type BountyState =
  | "open"
  | "pending_approval"
  | "under_review"
  | "closed"
  | "inactive";

export type Bounty = {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  sponsors: Sponsor[];
  resources?: Record<string, string>; // This is optional as not every bounty might have additional resources.
  termsAndConditions?: string; // This could be a URL or a text field
  state?: BountyState;
  renewable?: boolean; // This is optional, defaulting to false if not provided
  expiration?: number; // This is optional
  requiresApproval?: boolean; // undefined or false means no approval is required
  tags?: string[]; // This is optional
};
