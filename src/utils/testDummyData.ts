export const testProjects = [
  {
    id: "f0b83d3a0b77da97ec7eefc4",
    clientId: "2ebfad09bacb0c0cc031b5fa",
    employeeIds: ["9fbdd0ddcaaef6f1f21d674b", "59bcf5e767dfaab0db908acc"],
    contract: {
      startDate: "Thu Jun 20 2019",
      endDate: "Thu Dec 30 2021",
      size: "47362.95",
    },
  },
  {
    id: "3c8a1083d6befcfbbb1cca37",
    clientId: "e729699c1e86e4a760a51f5b",
    employeeIds: ["9fbdd0ddcaaef6f1f21d674b", "59bcf5e767dfaab0db908acc"],
    contract: {
      startDate: "Sat Jan 02 2021",
      endDate: "Mon Jun 21 2021",
      size: "29267.84",
    },
  },
];

const employee1 = {
  id: "9fbdd0ddcaaef6f1f21d674b",
  name: "Miss Jane Rowe",
  role: "Senior Response Developer",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/50.jpg",
};

const employee2 = {
  id: "59bcf5e767dfaab0db908acc",
  name: "Johnnie Bradtke",
  role: "National Group Executive",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1196.jpg",
};

export const testEmployees = [employee1, employee2];

const client1 = {
  id: "2ebfad09bacb0c0cc031b5fa",
  name: "Murray, Corwin and Mante",
};

const client2 = {
  id: "e729699c1e86e4a760a51f5b",
  name: "Will - Lehner",
};

export const testClients = [client1, client2];


export const testResult1 = [
  {...testProjects[0], clientName: "Murray, Corwin and Mante"},
  {...testProjects[1], clientName: "Will - Lehner"}
]
