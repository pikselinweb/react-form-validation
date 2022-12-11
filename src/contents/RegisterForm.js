import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
// UTILS
import { localeYup } from "../utils/localeYup";
// MATERIAL UI
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import RegisterFormBar from "./RegisterFormBar";

const RegisterForm = () => {
  const { t, i18n } = useTranslation();
  // FORM SCHEMA
  const registerSchema = yup
    .object({
      email: yup.string().email().required().label(t("form_fields.email")),
      name: yup.string().max(30).nullable().label(t("form_fields.name")),
      surname: yup.string().max(20).nullable().label(t("form_fields.surname")),
      password: yup
        .string()
        .min(8)
        .max(16)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          t("validation_messages.password_regex")
        )
        .required()
        .label(t("form_fields.password")),
      passwordRepeat: yup
        .string()
        .min(8)
        .max(16)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          t("validation_messages.password_regex")
        )
        .oneOf(
          [yup.ref("password"), null],
          t("validation_messages.passwords_must_match")
        )
        .required()
        .label(t("form_fields.password_repeat")),
      age: yup
        .number()
        .positive()
        .moreThan(18)
        .required()
        .label(t("form_fields.age")),
    })
    .required();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));
  useEffect(
    () => {
      i18n.on("languageChanged", () => {
        localeYup(null, t);
        reset("", { keepValues: true });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <>
      <RegisterFormBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <TextField
              error={errors.email ? true : false}
              helperText={errors.email?.message}
              name="email"
              type="text"
              label={t("form_fields.email")}
              {...register("email")}
              variant="outlined"
              fullWidth
              data-cy="form__email"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              error={errors.name ? true : false}
              helperText={errors.name?.message}
              name="name"
              type="text"
              label={t("form_fields.name")}
              {...register("name")}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              error={errors.surname ? true : false}
              helperText={errors.surname?.message}
              name="surname"
              type="text"
              label={t("form_fields.surname")}
              {...register("surname")}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={errors.password ? true : false}
              helperText={errors.password?.message}
              name="password"
              type="password"
              label={t("form_fields.password")}
              {...register("password")}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={errors.passwordRepeat ? true : false}
              helperText={errors.passwordRepeat?.message}
              name="passwordRepeat"
              type="password"
              label={t("form_fields.password_repeat")}
              {...register("passwordRepeat")}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={errors.age ? true : false}
              helperText={errors.age?.message}
              name="age"
              type="text"
              label={t("form_fields.age")}
              {...register("age")}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button type="submit" variant="contained" data-cy="submit-button">
              {t("common.register")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default RegisterForm;
