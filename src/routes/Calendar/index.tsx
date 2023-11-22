import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
    <>
        <section class = 'section bright'> Event Calendar!</section>
        <div class = 'calendar'>
            <div class = 'day'>
                <div class = 'date'>Wed 22nd</div>
                <div class = 'event'>
                    <span class = 'eventDescription'> Eat Pizza </span>
                </div>
            </div>
        </div>
    </>
    )
})