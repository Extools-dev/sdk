const status = document.getElementById('status') 
const email = document.getElementById('email');
const base_api_url = document.getElementById('base_api_url');


document.getElementById('login').addEventListener('click', async () => {
    
    status.innerHTML = 'Trying getEmail with interactive=true';

    const extools = new Extools();
    const res = await extools.getEmail(interactive=true)

    status.innerHTML = status.innerHTML + `<br/>Result: ${ res }`;
    status.innerHTML = status.innerHTML + '<br/>Finished';

    email.value = res;
})

document.getElementById('get_email').addEventListener('click', async () => {
    status.innerHTML = 'Trying getEmail with interactive=false';

    const extools = new Extools();
    const res = await extools.getEmail(interactive=false)

    status.innerHTML = status.innerHTML + `<br/>Result: ${ res }`;
    status.innerHTML = status.innerHTML + '<br/>Finished';

    email.value = res;
})

document.getElementById('check_licence').addEventListener('click', async () => {
    if (email.value.length == 0) {
        status.innerHTML = 'Please fill the email field';
        return;
    }

    status.innerHTML = `Trying check_licence with base_api_url=${ base_api_url.value } and email = ${ email.value }`;
    
    const extools = new Extools();
    const res = await extools.checkLicense(base_api_url.value, email.value);

    status.innerHTML = status.innerHTML + '<br>Result:'
    status.innerHTML = status.innerHTML + '<br>' + JSON.stringify(res);

    const licence_status = document.getElementById('licence_status')
    const active_sub_stats = document.getElementById('active_sub_stats');
    const due_date = document.getElementById('due_date')
    const edit_subs = document.getElementById('edit_subs');
    const cancel_subs = document.getElementById('cancel_subs');

    licence_status.innerHTML = res.status 
    active_sub_stats.style.display = res.status == 'active' ? 'block' : 'none';

    if (res.status == 'active') {
        due_date.innerHTML = res.subscription.next_payment;
        edit_subs.href = res.subscription.update_url;
        cancel_subs.href = res.subscription.cancel_url;
    }

})
