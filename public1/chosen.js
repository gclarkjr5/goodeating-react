function fillChosen() {
    $.get(`./states`, data => {
        _.forEach(data, state => {
            $('.chosen-select').append(`<option value=${state.Abbreviation}>${state.State}</option>`);
        })
        $(`.chosen-select`).val(`TX`)
        $(`.chosen-select`).trigger(`chosen:updated`);
        $(`.chosen-select`).on(`change`, (evt, params) => {
            // console.log(evt)
            // console.log(params)
            $.ajax({
                type: "POST",
                url: `/getStateData`,
                data: params,
                success: results => {
                    initMap(results)
                }
            });
        })
    })
}