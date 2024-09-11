import SettingsSearch from "@/app/components/settings/SettingsSearch";

import TabieSettings from "@/app/components/settings/TableSettings";
import Image from "next/image";
import React from "react";
import OrganizationTree from "../../organizationTree/page";
import OrganizationTable from "@/app/components/settings/OrganizationTable";

export default function organization() {
  const headers = ["שם יחידה", "ראש יחידה", "מייל ראש יחידה", "קוד לביא"];

  const organizationData = [
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">ניהול קודי פעילות</div>
          <SettingsSearch />
        </div>

        <OrganizationTable
          page={"organization"}
          data={organizationData}
          headers={headers}
        />
      </div>
    </>
  );
}
