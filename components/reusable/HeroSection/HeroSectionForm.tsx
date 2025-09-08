"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
    location: z.string().min(5, {
        message: "Location must be of atleast 5 characters.",
    }),
    propertyType: z.enum(["House", "Apartment", "Condo", "Townhouse", "Land"],),
    priceRange: z.enum(["Under $200K", "$200K - $500K", "$500K - $800K", "Over $800K - 1.2M", "Above $1.2M"],),
    bedrooms: z.enum(["1", "2", "3", "4+"],),
    bathrooms: z.enum(["1", "2", "3", "4+"],),
})

type FormData = z.infer<typeof formSchema>;

export function HeroSectionForm() {

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            location: "",
            propertyType: "House",
            priceRange: "Under $200K",
            bedrooms: "1",
            bathrooms: "1",
        },
    })

    // Submit handler
    function onSubmit(data: FormData) {
        console.log("Form submitted:", data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg p-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.15)] bg-white flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="location" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                {/* Property Type */}
                <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Property Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select property type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="House">House</SelectItem>
                                    <SelectItem value="Apartment">Apartment</SelectItem>
                                    <SelectItem value="Condo">Condo</SelectItem>
                                    <SelectItem value="Townhouse">Townhouse</SelectItem>
                                    <SelectItem value="Land">Land</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Price Range */}
                <FormField
                    control={form.control}
                    name="priceRange"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select price range" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Under $200K">Under $200K</SelectItem>
                                    <SelectItem value="$200K - $500K">$200K - $500K</SelectItem>
                                    <SelectItem value="$500K - $800K">$500K - $800K</SelectItem>
                                    <SelectItem value="Over $800K - 1.2M">Over $800K - 1.2M</SelectItem>
                                    <SelectItem value="Above $1.2M">Above $1.2M</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Bedrooms */}
                <FormField
                    control={form.control}
                    name="bedrooms"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bedrooms</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select number of bedrooms" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                    <SelectItem value="4+">4+</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Bathrooms */}
                <FormField
                    control={form.control}
                    name="bathrooms"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bathrooms</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select number of bathrooms" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                    <SelectItem value="4+">4+</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}