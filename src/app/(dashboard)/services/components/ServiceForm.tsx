"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Button, buttonVariants } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import PhoneInputWithCountrySelect from "react-phone-number-input"
import { InputForPhone } from "./PhoneInput"


const formSchema = z.object({ "name": z.string().min(1).max(255), "email": z.string().min(1).max(255), "phno": z.string().min(1).max(255) })

export function ServiceForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phno: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        form.reset();
    }

    return (
        <Form {...form}>
            <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Nyal Kakadia" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                                <Input placeholder="nyalkakadia@gmail.com" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phno"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your phone number</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="" {...field} />
                            </FormControl>
  
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={buttonVariants({ variant: 'default',className: 'bg-purplemain hover:bg-purplemain-dark px-4 py-4 rounded-none' })}>Submit</Button>
            </form>

            {/* <InputForPhone />  */}
        </Form>
    )
}
