import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// MATERIAL UI
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import TranslateIcon from "@mui/icons-material/Translate";
import Typography from "@mui/material/Typography";

const languages = ["en", "tr"];
const RegisterFormBar = () => {
  const { t, i18n } = useTranslation();

  // STATE
  const [anchorEl, setAnchorEl] = useState(null);

  // MENU FUNCTIONS
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // CHANGE LANG
  const changeLanguage = (langVal) => {
    if (i18n.isInitialized && i18n.language !== langVal) {
      i18n.changeLanguage(langVal);
    }
    handleClose();
  };

  return (
    <AppBar position="static" sx={{ mb: 5 }} elevation={0} color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t("register_form")}
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <TranslateIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {languages.map((lang) => (
              <MenuItem key={lang} onClick={() => changeLanguage(lang)}>
                {t(`languages.${lang}`)}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default RegisterFormBar;
