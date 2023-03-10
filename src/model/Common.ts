import { z } from 'zod'

export const SessionIDSchema = z.string().regex(/^[0-9]{6}$/)

export const UserIDSchema = z.string().regex(/^[0-9]{6}$/)

export const DocumentIDSchema = z.string().regex(/^[0-9]{6}$/)

export const UserNameSchema = z.string().regex(/^.{1,20}$/)

export const UserTokenSchema = z.string().regex(/^[0-9]{6}/)

export const DocumentNameSchema = z.string().regex(/^.{1,100}$/)

export const DocumentDataSchema = z.string().max(1000000)
