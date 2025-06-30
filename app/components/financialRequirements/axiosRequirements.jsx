 
 import React from 'react'
 
 export default function axiosRequirements() {
   return (
     <div>axiosRequirements</div>
   )
 }
 
 const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/sections")
      .then((res) => {
        const formatted = res.data.map((section) => ({
          value: section.id,
          label: section.name,
        }));
        setOptions(formatted);
      })
      .catch((err) => {
        console.error("Failed to fetch sections:", err);
      })
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/api/gmsh")
      .then((res) => {
        const formatted = res.data.map((gmsh) => ({
          value: gmsh.id,
          label: gmsh.name,
        }));
        setOptions(formatted);
      })
      .catch((err) => {
        console.error("Failed to fetch sections:", err);
      })
      .finally(() => setLoading(false));
  }, []);


const selectOptionsMap = {
  levelOfIntrest: [
    { value: "גבוה", label: "גבוה" },
    { value: "בינוני", label: "בינוני" },
    { value: "נמוך", label: "נמוך" },
  ],
  gmash: [
    { value: "כן", label: "כן" },
    { value: "לא", label: "לא" },
  ],
  securityClassification: [
    { value: 'בלמ"ס', label: 'בלמ"ס' },
    { value: "סודי", label: "סודי" },
    { value: "סודי ביותר", label: "סודי ביותר" },
  ],
  leadingSection: [{ value: 'בלמ"ס', label: 'בלמ"ס' }],
  Mname: [{ value: 'בלמ"ס', label: 'בלמ"ס' }],
};



const selectOptionsMap = {
  levelOfIntrest: [
    { value: "גבוה", label: "גבוה" },
    { value: "בינוני", label: "בינוני" },
    { value: "נמוך", label: "נמוך" },
  ],
  gmash: [
    { value: "כן", label: "כן" },
    { value: "לא", label: "לא" },
  ],
  securityClassification: [
    { value: 'בלמ"ס', label: 'בלמ"ס' },
    { value: "סודי", label: "סודי" },
    { value: "סודי ביותר", label: "סודי ביותר" },
  ],
  leadingSection: [{ value: 'בלמ"ס', label: 'בלמ"ס' }],
  Mname: [{ value: 'בלמ"ס', label: 'בלמ"ס' }],
};
export default selectOptionsMap;