'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

interface PayFastFormProps {
  amount: string
  frequency: 'monthly' | 'once-off'
  onBack: () => void
}

export default function PayFastForm({ amount, frequency, onBack }: PayFastFormProps) {
  const [formData, setFormData] = useState({
    name_first: '',
    name_last: '',
    email_address: '',
    cell_number: '',
    email_address_confirm: '',
    is_anonymous: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.is_anonymous) {
      if (!formData.name_first) newErrors.name_first = 'First name is required'
      if (!formData.name_last) newErrors.name_last = 'Last name is required'
      if (!formData.cell_number) newErrors.cell_number = 'Cell number is required'
      if (!/^[0-9]{10}$/.test(formData.cell_number)) {
        newErrors.cell_number = 'Please enter a valid 10-digit cell number'
      }
    }

    if (!formData.email_address) newErrors.email_address = 'Email is required'
    if (!formData.email_address_confirm) newErrors.email_address_confirm = 'Please confirm your email'
    if (formData.email_address !== formData.email_address_confirm) {
      newErrors.email_address_confirm = 'Emails do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    // PayFast configuration
    const merchant_id = process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID
    const merchant_key = process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY
    const return_url = `${window.location.origin}/donate/success`
    const cancel_url = `${window.location.origin}/donate`
    const notify_url = `${window.location.origin}/api/payfast/notify`

    // Create payment data
    const paymentData = {
      merchant_id,
      merchant_key,
      return_url,
      cancel_url,
      notify_url,
      m_payment_id: `MSI-${Date.now()}`,
      amount: parseFloat(amount).toFixed(2),
      item_name: `MSI Donation - ${frequency === 'monthly' ? 'Monthly' : 'Once-off'}${formData.is_anonymous ? ' (Anonymous)' : ''}`,
      item_description: `Donation to Maths and Science Infinity${formData.is_anonymous ? ' (Anonymous)' : ''}`,
      email_address: formData.email_address,
      // Only include personal information if not anonymous
      ...(formData.is_anonymous ? {} : {
        name_first: formData.name_first,
        name_last: formData.name_last,
        cell_number: formData.cell_number,
      }),
      // For monthly subscriptions
      ...(frequency === 'monthly' ? {
        subscription_type: 2, // 2 = Recurring billing
        subscription_frequency: 3, // 3 = Monthly
        subscription_cycles: 0, // 0 = Unlimited cycles
        recurring_amount: parseFloat(amount).toFixed(2),
        frequency_unit: 3, // 3 = Monthly
        cycles: 0, // 0 = Unlimited cycles
      } : {
        // For once-off payments
        subscription_type: 0, // 0 = No subscription
        subscription_frequency: 0,
        subscription_cycles: 0,
      })
    }

    // Create form and submit to PayFast
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = process.env.NODE_ENV === 'production' 
      ? 'https://www.payfast.co.za/eng/process'
      : 'https://sandbox.payfast.co.za/eng/process'

    Object.entries(paymentData).forEach(([key, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value as string
      form.appendChild(input)
    })

    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Complete Your Donation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="is_anonymous"
              checked={formData.is_anonymous}
              onChange={(e) => {
                setFormData({ ...formData, is_anonymous: e.target.checked })
              }}
            />
            <Label htmlFor="is_anonymous" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Make this donation anonymous
            </Label>
          </div>

          {!formData.is_anonymous && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name_first">First Name</Label>
                <Input
                  id="name_first"
                  value={formData.name_first}
                  onChange={(e) => setFormData({ ...formData, name_first: e.target.value })}
                  className={errors.name_first ? 'border-red-500' : ''}
                />
                {errors.name_first && (
                  <p className="text-red-500 text-sm mt-1">{errors.name_first}</p>
                )}
              </div>
              <div>
                <Label htmlFor="name_last">Last Name</Label>
                <Input
                  id="name_last"
                  value={formData.name_last}
                  onChange={(e) => setFormData({ ...formData, name_last: e.target.value })}
                  className={errors.name_last ? 'border-red-500' : ''}
                />
                {errors.name_last && (
                  <p className="text-red-500 text-sm mt-1">{errors.name_last}</p>
                )}
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="email_address">Email Address</Label>
            <Input
              id="email_address"
              type="email"
              value={formData.email_address}
              onChange={(e) => setFormData({ ...formData, email_address: e.target.value })}
              className={errors.email_address ? 'border-red-500' : ''}
            />
            {errors.email_address && (
              <p className="text-red-500 text-sm mt-1">{errors.email_address}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email_address_confirm">Confirm Email Address</Label>
            <Input
              id="email_address_confirm"
              type="email"
              value={formData.email_address_confirm}
              onChange={(e) => setFormData({ ...formData, email_address_confirm: e.target.value })}
              className={errors.email_address_confirm ? 'border-red-500' : ''}
            />
            {errors.email_address_confirm && (
              <p className="text-red-500 text-sm mt-1">{errors.email_address_confirm}</p>
            )}
          </div>

          {!formData.is_anonymous && (
            <div>
              <Label htmlFor="cell_number">Cell Number</Label>
              <Input
                id="cell_number"
                type="tel"
                value={formData.cell_number}
                onChange={(e) => setFormData({ ...formData, cell_number: e.target.value })}
                className={errors.cell_number ? 'border-red-500' : ''}
              />
              {errors.cell_number && (
                <p className="text-red-500 text-sm mt-1">{errors.cell_number}</p>
              )}
            </div>
          )}

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="flex-1"
            >
              Continue to PayFast
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  )
} 