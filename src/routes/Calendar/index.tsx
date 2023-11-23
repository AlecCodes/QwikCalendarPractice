import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchOneEntry, Content } from "@builder.io/sdk-qwik";

//put here or in the root.tsx or in the 'router'tsx?
//must I use the useBuilderContent() hook?
// SHOULD THE CALENDAR BE A seperate COMPONENT from Calendar.tsx?
export const BUILDER_PUBLIC_API_= "54f45988ca8c43a1802285452264bbc1"
export const BUILDER_MODEL = "page";


export const useBuilderContent = routeLoader$(async ({ url, error }) => {
    // Fetch content for the specified model using the API key.
    const builderContent = await fetchOneEntry({
      model: BUILDER_MODEL,
      apiKey: BUILDER_PUBLIC_API_KEY,
    });
  
    // Return the fetched content.
    return builderContent;
  });
  

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
                            <span class = 'eventDescription'>Eat Pizza </span>
                        </div>
                    </div>
                </div>

                <div class='day'>        
                    <div class = 'date'>Thurs 23rd</div>
                    <div class = 'eventContainer'>
                        <div class = 'event'>
                            <div class = 'eventDescription'>Thanksgiving dinner party </div>
                        </div>
                        <div class = 'event'>
                            <span class = 'eventDescription'>Nap</span>
                        </div>
                    </div>
                </div>

                <div class='day'>        
                        <div class = 'date'>Friday 25th</div>
                        <div class = 'eventContainer'>
                            <div class = 'event'>
                                <div class = 'eventDescription'>Flight<span>8AM</span></div>
                            </div>
                            <div class = 'event'>
                                <span class = 'eventDescription'>Nap</span>
                            </div>
                        </div>
                </div>

                <div class='day'>        
                        <div class = 'date'>Mon 26th</div>
                        <div class = 'eventContainer'>
                            <div class = 'event'>
                                <div class = 'eventDescription'>Gym<span>8AM</span></div>
                            </div>
                            <div class = 'event'>
                                <span class = 'eventDescription'>Nap</span>
                            </div>
                        </div>
                </div>

                <div class='day'>        
                        <div class = 'date'>Tue 26th</div>
                        <div class = 'eventContainer'>
                            <div class = 'event'>
                                <div class = 'eventDescription'>Call<span>11AM</span></div>
                            </div>
                            <div class = 'event'>
                                <span class = 'eventDescription'>Gym</span>
                            </div>
                        </div>
                </div>

                <div class='day'>        
                        <div class = 'date'>Fri 30th</div>
                        <div class = 'eventContainer'>
                            <div class = 'event'>
                                <div class = 'eventDescription'>Run<span>11AM</span></div>
                            </div>
                            <div class = 'event'>
                                <span class = 'eventDescription'>Gym</span>
                            </div>
                            <div class = 'event'>
                                <span class ='eventDescription'>homeowkr</span>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    </>
    )
})