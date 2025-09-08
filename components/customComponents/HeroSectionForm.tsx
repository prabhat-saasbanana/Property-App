// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// const formSchema = z.object({
//   location: z.string().min(5, {
//     message: "Location must be of atleast 5 characters.",
//   }),
//   propertyType: z.enum(["House", "Apartment", "Condo", "Townhouse", "Land"],),
//   priceRange: z.enum(["Under $200K", "$200K - $500K", "$500K - $800K", "Over $800K - 1.2M", "Above $1.2M"],),
//   bedrooms: z.enum(["1", "2", "3", "4+"],),
//   bathrooms: z.enum(["1", "2", "3", "4+"],),
// })

// type FormData = z.infer<typeof formSchema>;

// export function ProfileForm() {
//   // ...
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       location: "",
//       propertyType: "House",
//       priceRange: "Under $200K",
//       bedrooms: "1",
//       bathrooms: "1",
//     },
//   })

//   // Submit handler
//   function onSubmit(data: FormData) {
//     console.log("Form submitted:", data)
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="location"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Location</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 Enter the location where you want to find a property.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="location"
//           render={({ field }) => (
//             <FormItem>
//               <Select>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Theme" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="light">Light</SelectItem>
//                   <SelectItem value="dark">Dark</SelectItem>
//                   <SelectItem value="system">System</SelectItem>
//                 </SelectContent>
//               </Select>
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   )
// }