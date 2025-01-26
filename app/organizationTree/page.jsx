import BoxField from "../components/BoxField";

const structure = {
  name: "יחידת על",
  departments: [
    {
      name: "מחלקה 1",
      branches: [
        {
          name: "ענף 1",
          sections: ["מדור 1", "מדור 2", "מדור 3", "מדור 4"],
        },
        {
          name: "ענף 2",
          sections: [],
        },
      ],
    },
    {
      name: "מחלקה 2",
      branches: [
        {
          name: "ענף 1",
          sections: [],
        },
        {
          name: "ענף 2",
          sections: ["מדור 1", "מדור 2"],
        },
      ],
    },
    { name: "מחלקה 3" },
    { name: "מחלקה 4" },
  ],
};

export default function OrganizationTree() {
  return (
      <div>
        <div>
          <BoxField name={structure.name} />
        </div>
        <div className="flex">
          {structure.departments.map((department) => (
            <div>
              <BoxField name={department.name} />
              <div className="flex">
                {department.branches &&
                  department.branches.map((branch) => (
                    <div>
                      <BoxField name={branch.name} />
                      <div className="flex">
                      {branch.sections &&
                        branch.sections.map((section) => (
                          <div>
                            <BoxField name={section} />
                          </div>
                        ))}
                        </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
