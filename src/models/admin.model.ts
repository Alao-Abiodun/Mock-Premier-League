import mongoose, { Schema, Model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto'

export interface IAdmin extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
}

const adminSchema: Schema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'ROL-ADMIN'} 
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.password,
            delete ret.createdAt,
            delete ret.updatedAt,
            delete ret.__v
        }
    },
    timestamps: true
})

adminSchema.pre('save', async function (next) {
    // If password was modified
    if (!this.isModified('password')) return next();
  
    // Hash Password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
  
    next();
  });
  
  adminSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next();
  
    this.passwordChangedAt = Date.now() - 1000;
    next();
  });
  
  adminSchema.methods.correctPassword = function (
    candidatePassword,
    userPassword
  ) {
    return bcrypt.compare(candidatePassword, userPassword);
  };
  
  adminSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } });
    next();
  });
  
//   adminSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
//     if (this.passwordChangedAt) {
//       const changedTimestamp = String(parseInt(
//         this.passwordChangedAt.getTime() / 1000,
//         10
//       ));
//       return JWTTimestamp < changedTimestamp;
//     }
//     // Password not changed
//     return false;
//   };
  
  adminSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken, 'utf8')
      .digest('hex');
  
    this.passwordResetExpires = Date.now() + 20 * 60 * 1000;
  
    return resetToken;
  };



const Admin = mongoose.model<IAdmin>('Admin', adminSchema);

export { Admin };