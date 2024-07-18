import { defineField } from "sanity";

const roomTypes = [
    {title: 'Basic', value: 'basic'},
    {title: 'Luxury', value: 'luxury'},
    {title: 'Suite', value: 'suite'}
]

const hotelRoom = {
    name: "hotelRoom",
    title: "Hotel Room",
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().max(50).error('Name should be less than 50 characters')
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required().min(50).error('Description should be at least 50 characters long')
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required().min(100).error('Price should be at least 100')
        }),
        defineField({
            name: 'discount',
            title: 'Discount',
            type: 'number',
            initialValue: 0,
            validation: Rule => Rule.required().min(0).max(100).error('Discount should be between 0 and 100')
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'object', fields: [
                {name: 'url', title: 'URL', type: 'url'},
                {name: 'file', title: 'File', type: 'file'}
            ]}],
            validation: Rule => Rule.required().min(3).error('Images should be at least 3')
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'object',
            fields: [
                {name: 'url', title: 'URL', type: 'url'},
                {name: 'file', title: 'File', type: 'file'}
            ],
            validation: Rule => Rule.required().error('Cover image is required')
        }),
        defineField({
            name: 'type',
            title: 'Room Type',
            type: 'string',
            options: {
                list: roomTypes
            },
            validation: Rule => Rule.required(),
            initialValue: 'basic'
        }),
        defineField({
            name: 'specialNote',
            title: 'Special Note',
            type: 'text',
        
            validation: Rule => Rule.required(),
            initialValue: 'Check-in time is 12:00 PM, Check-out time is 11:59 AM. If you leave behind any items, please contact the receptionist.'
        }),
        defineField({
            name: 'dimension',
            title: 'Dimension',
            type: 'string',
        }),
        defineField({
            name: 'numberOfBeds',
            title: 'Number Of Beds',
            type: 'number',
            validation: Rule => Rule.required().min(1).error('Capacity should be at least 1'),
            initialValue: 1
        }),
        defineField({
            name: 'offeredAmeninties',
            title: 'Offered Ameninties',
            type: 'array',
            of: [{type: 'object', fields: [
                {name: 'title', title: 'Title', type: 'string'},
                {name: 'amenity', title: 'Amenity', type: 'string'}
            ] } ]
        }),
        defineField({
            name: 'isBooked',    
            title: 'Is Booked',
            type: 'boolean',
            initialValue: false
        }),
        defineField({
            name: 'isFeatured',    
            title: 'Is Featured',
            type: 'boolean',
            initialValue: false
        }),
        defineField({
            name: 'reviews',    
            title: 'Reviews',
            type: 'array',
            of: [{type: 'review'}]
        })

    ]
}

export default hotelRoom