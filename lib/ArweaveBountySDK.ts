import { ApiConfig } from "arweave/node/lib/api";
import { Bounty, BountyClient, BountyState } from "./types";
import Arweave from "arweave";

export class ArweaveBountySDK implements BountyClient {
  private arweave: Arweave;
  gatewayConfig: ApiConfig;

  constructor(config: ApiConfig) {
    this.gatewayConfig = config;
    this.arweave = Arweave.init(this.gatewayConfig);
  }

  async createBounty(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async requestApproval(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async approveHunter(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async submitWork(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async reviewBounty(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async renewBounty(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async closeBounty(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async getBounty(id: string): Promise<Bounty> {
    throw new Error("Method not implemented.");
  }

  async getBounties(filters: {
    currency?: string[];
    sponsors?: string[];
    requiresApproval?: boolean;
    state?: BountyState[];
    age?: number;
  }): Promise<Bounty[]> {
    throw new Error("Method not implemented.");
  }
}
