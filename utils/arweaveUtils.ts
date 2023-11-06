export const buildBountyQuery = (id: string) => ({
  query: `{
    transactions(
      ids: ["${id}"]
    ) {
      edges {
        node {
          id
          owner {
            address
          }
          tags {
            name
            value
          }
          fee {
            winston
            ar
          }
          block {
            timestamp
            height
          }
          signature
          quantity {
            winston
            ar
          }
          data {
            size
            type
          }
        }
      }
    }
}`,
});

export const buildBountiesQuery = (filters: {
  currency?: string[];
  sponsors?: string[];
  requiresApproval?: boolean;
  state?: BountyState[];
  age?: number;
}) => {
  const { currency, sponsors, requiresApproval, state, age } = filters;
  let query = `{
        transactions(
        first: 100
        owners: [${sponsors?.map((sponsor) => `"${sponsor}"`)}]
        tags: [
            ${currency?.map(
              (currency) =>
                `{ name: "Bounty-Currency", values: ["${currency}"] }`
            )}
            ${
              requiresApproval
                ? `{ name: "Bounty-Requires-Approval", values: ["true"] }`
                : ""
            }
            ${state?.map(
              (state) => `{ name: "Bounty-State", values: ["${state}"] }`
            )}
        ]
        ) {
        edges {
            node {
            id
            owner {
                address
            }
            tags {
                name
                value
            }
            fee {
                winston
                ar
            }
            block {
                timestamp
                height
            }
            signature
            quantity {
                winston
                ar
            }
            data {
                size
                type
            }
            }
        }
        }
    }`;
  return { query };
};
