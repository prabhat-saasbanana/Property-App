import React from 'react'
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '../ui/card';

export default function HeroSection() {
  return (
    <>
    <Button>Premium Properties</Button>
    <section className='flex flex-row w-[50%] flex-wrap'>
        <Card>
            <CardHeader>
                <CardTitle>Discover Your Perfect Home in the Heart of the City</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Browse thousands of verified listings from trusted agents.</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
        </Card>
        <Card></Card>
    </section>
    </>
  )
}