
  var persons = [
    {
      "name": "Jane Doe",
      "sex": "F",
      "born": "1876",
      "died": "1956",
      "father": "Petrus de Milliano",
      "mother": "Sophia van Damme"
    },
    {
      "name": "Jane Ramirez",
      "sex": "F",
      "born": "1956",
      "died": "2009",
      "father": "Matt Ramirez",
      "mother": "Amy Ramirez"
    },
    {
      "name": "Kim Lee",
      "sex": "F",
      "born": "1920",
      "died": "2001",
      "father": "Jung Lee",
      "mother": "Taeyeon Lee"
    },
    {
      "name": "William Johnson",
      "sex": "M",
      "born": "1790",
      "died": "1865",
      "father": "Chris Johnson",
      "mother": "Maggie Jean Johnson"
    },
    {
      "name": "Dwayne Smith",
      "sex": "Male",
      "born": "1852",
      "died": "1936",
      "father": "Jared Smith",
      "mother": "Lily Faith Smith"
    }
  ]

  var person = persons.filter(function (personName)
  {
    return personName.name == "input";
  })

