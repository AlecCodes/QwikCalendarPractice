import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
    <>
        <div class='calendarContainer'>
        <section class = 'section bright'> Event Calendar!</section>
        <br></br>
            <div class = 'calendar'>

                <div class = 'day'>
                    <div class = 'date'>Wed 22nd</div>
                    <div class ='eventContainer'>
                        <div class = 'event'>
                            <span class = 'eventDescription'> Eat Pizza </span>
                        </div>
                    </div>
                </div>

                <div class='day'>        
                        <div class = 'date'>Thurs 23rd</div>
                        <div class = 'eventContainer'>
                            <div class = 'event'>
                                <span class = 'eventDescription'>Thanksgivinggggg</span>
                            </div>
                            <div class = 'event'>
                                <span class = 'eventDescription'>Nap</span>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    </>
    )
})