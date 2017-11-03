declare let $;
export function alert(title: string, content: string = '') {
    $.alert({
        title: title || 'Alert!',
        content: content
    });
}

export function confirm(title: string, content: string = ''): Promise<boolean> {
    return new Promise(resolve => {
        $.confirm({
            title: title || 'Confirm!',
            content: content,
            buttons: {
                confirm: () => resolve(true),
                cancel: () => resolve(false)
            }
        });
    });
}

export function dialog(title: string, content: string = '') {
    $.dialog({
        title: title || 'Dialog!',
        content: content
    });
}

export function loadingPage(status: boolean) {
    let loading = $('#loading-page');
    if (loading.lenght == 0) return;
    if (status) loading.fadeIn();
    else loading.hide();
}

// somethingElse: {
//     text: 'Something else',
//     btnClass: 'btn-blue',
//     keys: ['enter', 'shift'],
//     action: function () {
//         $.alert('Something else?');
//     }
// }