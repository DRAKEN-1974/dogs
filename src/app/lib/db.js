import { supabase } from './supabase'

export const contactQueries = {
  createContactSubmission: async ({ name, email, phone, message }) => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([{ name, email, phone, message }])
        .select()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
}