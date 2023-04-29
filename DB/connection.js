import mongoose from 'mongoose'

const connectDB = async () => {
  try { await mongoose.connect(process.env.DB_LOCAL)
    console.log('DB connected ...............')
  } catch (error) {
    console.error('error', error)
    console.trace(error.stack)
    console.log()
  }
}

export default connectDB
