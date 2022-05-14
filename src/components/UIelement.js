import React, { useEffect, useRef, useState } from "react"
import { RadioGroup, Transition } from '@headlessui/react'

const plans = [
    {
      name: 'WordPress',
      ram: '12GB',
      cpus: '6 CPUs',
      disk: '160 GB SSD disk',
      url: 'https://unsplash.com/photos/_BgjTlK6-dU',
    },
    {
      name: 'Drupal',
      ram: '16GB',
      cpus: '8 CPUs',
      disk: '512 GB SSD disk',
      url: 'https://unsplash.com/photos/g5ZM33jizAw',
    },
    {
      name: 'Shopify',
      ram: '32GB',
      cpus: '12 CPUs',
      disk: '1024 GB SSD disk',
      url: 'https://unsplash.com/photos/i3IGfRua158',
    },
  ]
  
export default function Leadin() {

  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="pt-10 bg-gravital-darker-blue sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              
                <div className="lg:py-12">
                  {/* <a
                    href="#"
                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                      We're hiring
                    </span>
                    <span className="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a> */}
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-yellow-500 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block leading-tight">Unlock the potential</span>
                    <span className="block leading-tight pb-4 mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-yellow-500 to-orange-500">of your website.</span>
                  </h1>
                  <p className="mt-5 text-base text-gray-300 sm:mt-6 sm:text-xl lg:text-lg xl:text-xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    {/* Radio Group */}
                    <RadioGroup value={selected} onChange={setSelected} > 
                      <RadioGroup.Label className="sr-only">Platform</RadioGroup.Label>
                      <div className="space-y-2" >
                        {plans.map((plan) => (
                          <RadioGroup.Option
                            key={plan.name}
                            value={plan}
                            className={({ active, checked }) =>
                              `${
                                active
                                  ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                  : ''
                              }
                              ${
                                checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                              }
                                relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <div className="flex w-full items-center justify-between">
                                  <div className="flex items-center">
                                    <div className="text-sm">
                                      <RadioGroup.Label
                                        as="p"
                                        className={`font-medium  ${
                                          checked ? 'text-white' : 'text-gray-900'
                                        }`}
                                      >
                                        {plan.name}
                                      </RadioGroup.Label>
                                      <RadioGroup.Description
                                        as="span"
                                        className={`inline ${
                                          checked ? 'text-sky-100' : 'text-gray-500'
                                        }`}
                                      >
                                        <span>
                                          {plan.ram}/{plan.cpus}
                                        </span>{' '}
                                        <span aria-hidden="true">&middot;</span>{' '}
                                        <span>{plan.disk}</span>
                                      </RadioGroup.Description>
                                    </div>
                                  </div>
                                  {checked && (
                                    <div className="shrink-0 text-white">
                                      <CheckIcon className="h-6 w-6" />
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
               <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
               <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src='https://unsplash.com/photos/_BgjTlK6-dU'
                    alt=""
                  />
                </div>
              </div>
            </div> 
          </div>
        </div>  
        {/* More main page content here... */}
      </main>
    </div>
  )
}

function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }



