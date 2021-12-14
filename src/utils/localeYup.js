import * as yup from "yup";
export function localeYup(p, t) {
  // List of yup locale keys
  // https://github.com/jquense/yup/blob/master/src/locale.ts
  yup.setLocale({
    mixed: {
      required: (props) =>
        t("validation_messages.required", { path: props?.path }),
      notType: (props) =>
        t("validation_messages.notType", {
          path: props?.path,
          type: t(props?.type),
        }),
      // oneOf: (props) =>
      //   t("validation_messages.oneOf", {
      //     path: props?.path,
      //     values: props?.values,
      //   }),
    },

    string: {
      max: (props) =>
        t("validation_messages.max", {
          label: props?.label,
          max: props?.max,
        }),
      min: (props) =>
        t("validation_messages.min", {
          label: props?.label,
          min: props?.min,
        }),
      email: (props) => t("validation_messages.email", { label: props?.label }),
    },
    number: {
      moreThan: (props) =>
        t("validation_messages.moreThan", {
          label: props?.label,
          more: props?.more,
        }),
      integer: (props) =>
        t("validation_messages.integer", { path: props?.path }),
    },
  });
}
