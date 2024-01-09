$(() => {
  var myParam = location.search.split("elemSymbol=")[1];

  axios
    .get("../Data/PeriodicTable.json")
    .then((response) => {
      response.data.find((data) => {
        if (data.symbol === myParam) {
          console.log(data);

          $(".elem_name").html(`${data.name} (${data.symbol})`);
          $(".elem_desc").html(data.summary);

          parseData("Atomic Number", data.number);
          parseData(
            "Atom Planetary Modal",
            `<img src=${data.bohr_model_image} />`
          );
          parseData("Discovered By", data.discovered_by);
          parseData("Atomic Mass", data.atomic_mass);
          parseData("Group", data.group);
          parseData("Melting Point", data.melt + " K");
          parseData("Boiling Point", data.boil + " K");
          parseData("Density", data.density + " g/L");
          parseData("Category", data.category);
          parseData("Molar Heat", data.molar_heat + " (mol*K)");
          parseData("Physical State", data.phase);
          parseData("Appearance", data.appearance);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

const parseData = (title, data) => {
  $("#elem_table").append(`<tr>
  <th>${title}</th>
  <td>${data}</td>
</tr>`);
};
